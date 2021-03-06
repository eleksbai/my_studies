from flask import render_template, session, redirect, url_for, current_app
from flask.json import jsonify

from .. import db
from ..models import User
from ..email import send_email
from . import main
from .forms import NameForm


@main.route('/', methods=['GET', 'POST'])
def index():
    form = NameForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.name.data).first()
        if user is None:
            user = User(username=form.name.data)
            db.session.add(user)
            session['known'] = False
            if current_app.config['FLASKY_ADMIN']:
                send_email(current_app.config['FLASKY_ADMIN'], 'New User',
                           'mail/new_user', user=user)
        else:
            session['known'] = True
        session['name'] = form.name.data
        return redirect(url_for('.index'))
    return render_template('shuju.html',
                           form=form, name=session.get('name'),
                           known=session.get('known', False))


@main.route('/get_json')
def get_json():
    d = {
        "第一": "Singular sensation",
        "第二": "Beady little eyes",
        "第三": "Little birds pitch by my doorstep"
    }
    return jsonify(d)
