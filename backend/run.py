from api import createApp

flask_app = createApp()

if __name__ == '__main__':
    flask_app.run(debug=True)