# Generated by Django 2.2 on 2019-04-16 20:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mtb_trails_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='park',
            name='photo_url',
        ),
    ]
