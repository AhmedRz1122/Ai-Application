from PIL import Image
import torchvision.transforms as transforms
import torch
from meta_ai_api import MetaAI
from torchvision.models import resnet18, ResNet

# Define device
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

ai = MetaAI(fb_email="your email", fb_password="your password")

# Load and preprocess the custom image
def preprocess_image(image_path):
    image = Image.open(image_path)
    transform = transforms.Compose([
        transforms.Resize((224, 224)),  # Resize to 224x224
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.5071, 0.4867, 0.4408], std=[0.2675, 0.2565, 0.2761])  # CIFAR-100 normalization
    ])
    image = transform(image).unsqueeze(0)  # Add batch dimension
    return image.to(device)


def Classifier(image_path):
    custom_image = preprocess_image(image_path)
    # Allowlist the ResNet class
    # Allowlist the ResNet class
    # torch.serialization.add_safe_globals([ResNet])
    # Load the entire model
    model = torch.load('D:\\All about Software engineering project\\thunder.ai\\thunder.ai\\cifar100_resnet18_model.pth', map_location=device)
    # Perform inference
    model.eval()
    with torch.no_grad():
        output = model(custom_image)
        _, predicted = torch.max(output, 1)
        predicted_class = predicted.item()

    # CIFAR-100 classes (for reference)
    classes = [
        'apple', 'aquarium_fish', 'baby', 'bear', 'beaver', 'bed', 'bee', 'beetle', 'bicycle', 'bottle',
        'bowl', 'boy', 'bridge', 'bus', 'butterfly', 'camel', 'can', 'castle', 'caterpillar', 'cattle',
        'chair', 'chimpanzee', 'clock', 'cloud', 'cockroach', 'couch', 'crab', 'crocodile', 'cup', 'dinosaur',
        'dolphin', 'elephant', 'flatfish', 'forest', 'fox', 'girl', 'hamster', 'house', 'kangaroo', 'keyboard',
        'lamp', 'lawn_mower', 'leopard', 'lion', 'lizard', 'lobster', 'man', 'maple_tree', 'motorcycle', 'mountain',
        'mouse', 'mushroom', 'oak_tree', 'orange', 'orchid', 'otter', 'palm_tree', 'pear', 'pickup_truck', 'pine_tree',
        'plain', 'plate', 'poppy', 'porcupine', 'possum', 'rabbit', 'raccoon', 'ray', 'road', 'rocket', 'rose',
        'sea', 'seal', 'shark', 'shrew', 'skunk', 'skyscraper', 'snail', 'snake', 'spider', 'squirrel', 'streetcar',
        'sunflower', 'sweet_pepper', 'table', 'tank', 'telephone', 'television', 'tiger', 'tractor', 'train', 'trout',
        'tulip', 'turtle', 'wardrobe', 'whale', 'willow_tree', 'wolf', 'woman', 'worm'
    ]

    return classes[predicted_class]

def chat(prompt):
    response = ai.prompt(message=prompt)
    return response["message"]

def image_generation(prompt):
    response = ai.prompt(message=prompt)
    resp = response["media"]
    res = []
    for i in resp:
        res.append(i["url"])
    return res

# print(image_generation("Piece of cake on table")[1])
# print(chat("What is the weather today in Los Angeles?"))