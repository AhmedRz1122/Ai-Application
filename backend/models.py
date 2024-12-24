from api import db

class User(db.Model):
    __tablename__ ='user'

    uid = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String,nullable=False)
    email = db.Column(db.String,nullable=False)
    password = db.Column(db.String,nullable=False)
    gender = db.Column(db.String,nullable=False)

    def get_id(self):
        return self.uid
    def __repr__(self):
        return f'User: {self.username}, Gender: {self.gender}'