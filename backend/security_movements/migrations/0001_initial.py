# Generated by Django 3.2.14 on 2022-07-21 04:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movement',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('security_movement_type', models.CharField(max_length=100)),
                ('buyer', models.CharField(blank=True, max_length=100)),
                ('seller', models.CharField(blank=True, max_length=100)),
                ('no_of_units', models.IntegerField()),
                ('price_per_unit', models.IntegerField()),
                ('date_created', models.DateField(auto_now_add=True)),
                ('last_modified', models.DateField(auto_now=True)),
            ],
        ),
    ]