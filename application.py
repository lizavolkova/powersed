from flask import Flask, request
import json
import boto3
from botocore.exceptions import ClientError

application = Flask(__name__)
bucket = "powersed"
mentor_file = "mentors.json"
s3 = boto3.client("s3")

@application.route("/")
def home():
	return "Powers Education API"

@application.route("/mentors", methods = ["GET", "POST", "DELETE"])
def mentors():
	if request.method == "GET":
		return get_mentors(request.args)
	elif request.method == "POST":
		return add_mentor(request.get_json())
	elif request.method == "DELETE":
		return remove_mentor(request.args)

def get_mentors(args):
	try:
		mentors = json.loads(read_s3(bucket, mentor_file))
	except ClientError:
		return json.dumps([])

	return json.dumps([mentors[mentor_id] for mentor_id in mentors])

def add_mentor(body):
	try:
		mentor_id = body["id"]
		new_mentor = {
			"id": mentor_id,
			"firstName": body["firstName"],
			"lastName": body["lastName"],
			"title": body["title"],
			"summary": body["summary"],
			"pictureUrl": body["pictureUrl"]
		}
	except KeyError:
		return json.dumps({"error": "invalid mentor object"})
	try:
		mentors = json.loads(read_s3(bucket, mentor_file))
	except ClientError:
		mentors = {}

	mentors[mentor_id] = new_mentor
	write_s3(bucket, mentor_file, json.dumps(mentors))
	return json.dumps({"mentor_added": mentor_id})

def remove_mentor(args):
	try:
		mentor_id = args["id"]
	except KeyError:
		return json.dumps({"error": "invalid delete request"})
	try:
		mentors = json.loads(read_s3(bucket, mentor_file))
	except ClientError:
		mentors = {}

	if mentor_id in mentors:
		del mentors[mentor_id]
		return json.dumps({"mentor_deleted": mentor_id})
	else:
		return json.dumps({"error": "mentor not found"})

#AWS API
def read_s3(bucket, file):
	return s3.get_object(Bucket = bucket, Key = file)["Body"].read().decode()

def write_s3(bucket, file, content):
	return s3.put_object(Bucket = bucket, Key = file, Body = content)

if __name__ == '__main__':
	application.run(debug=True)