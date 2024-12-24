from app import Classifier
import os
UPLOAD_FOLDER = "./uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
def classify(image_path):
    image_full_path = os.path.join(UPLOAD_FOLDER, image_path)
    if not os.path.exists(image_full_path):
        return "TRUE FILE"

    classification_result = Classifier(image_full_path)  # Replace with actual logic
    return {"classification": classification_result}

# print(classify(r"D:\All about Software engineering project\thunder.ai\uploads\comp.png"))
import os

# Base path
base_path = "D:/All about Software engineering project/thunder.ai/uploads"

# Dynamic file name
file_name = "comp.png"

# Join the base path and file name dynamically
full_path = os.path.join(base_path, file_name)

print(classify(full_path))
