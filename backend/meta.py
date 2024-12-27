from meta_ai_api import MetaAI

ai = MetaAI(fb_email="your email", fb_password="your password")
resp = ai.prompt(message="Generate an image of a tech CEO")
print(resp["media"])

response = ai.prompt(message="Whats the weather in San Francisco today? And what is the date?")
print(response)
  