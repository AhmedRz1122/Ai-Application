from flask import render_template, redirect, url_for, jsonify, request
from models import User
import os
from app import Classifier, chat, image_generation
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = "./uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
def register_route(app,db):

    @app.route("/classifier/<image_path>", methods=["GET"])
    def classify(image_path):
        # image_full_path = os.path.join(UPLOAD_FOLDER, image_path)
        # Base path
        base_path = "D:/All about Software engineering project/thunder.ai/uploads"

        # Dynamic file name
        file_name = image_path

        # Join the base path and file name dynamically
        image_full_path = os.path.join(base_path, file_name)
        if not os.path.exists(image_full_path):
            return jsonify({"error": "Image not found"}), 404

        classification_result = Classifier(image_full_path)  # Replace with actual logic
        return jsonify({"classification": classification_result})

    @app.route("/upload", methods=["POST"])
    def upload_image():
        if "image" not in request.files:
            return jsonify({"error": "No image provided"}), 400

        image = request.files["image"]
        filename = secure_filename(image.filename)
        save_path = os.path.join(UPLOAD_FOLDER, filename)
        image.save(save_path)

        return jsonify({"path": filename}), 200

    @app.route("/text/prompt", methods=["POST", "GET"])
    def text():
        if request.method == "POST":
            data = request.json
            prompt = data.get("prompt", "")
            response = chat(prompt)
            return response
        elif request.method == "GET":
            return jsonify({"message": "GET method not supported for this endpoint"}), 405


    @app.route("/image/<img_prompt>")
    def image(img_prompt):
        response = image_generation(img_prompt)
        url = {'url1':response[0],'url2':response[1],'url3':response[2],'url4':response[3]}
        return url
    
    @app.route('/signup', methods= ['GET','POST'])
    def signup():
        if request.method == 'GET':
            return "Register Page"
        elif request.method == 'POST':
            data = request.json  # Parse JSON data
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')
            gender = data.get('gender')

            # hasded_password = bcrypt.generate_password_hash(password).decode("utf-8")
            user = User(username=username, email=email, password=password, gender=gender)

            db.session.add(user)
            db.session.commit()
            return "Registration Successful"
    
    @app.route('/login', methods= ['GET','POST'])
    def login():
        if request.method == 'GET':
            return 'Login Pages'
        elif request.method == 'POST':
            data = request.json  # Parse JSON data
            email = data.get('email')
            password = data.get('password')

            user = User.query.filter(User.email==email).first()
            if password == user.password:
                return 'Login Successful'
            else:
                return 'Failed Login'