# Generated by Django 4.0.3 on 2023-06-03 00:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LocationVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('import_href', models.CharField(max_length=200, null=True)),
                ('closet_name', models.CharField(max_length=150, null=True)),
                ('section_number', models.PositiveSmallIntegerField(null=True)),
                ('shelf_number', models.PositiveSmallIntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Hat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, null=True)),
                ('fabric', models.CharField(max_length=150, null=True)),
                ('style_name', models.CharField(max_length=150, null=True)),
                ('color', models.CharField(max_length=150)),
                ('picture_url', models.URLField(null=True)),
                ('location', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='hats', to='hats_rest.locationvo')),
            ],
        ),
    ]