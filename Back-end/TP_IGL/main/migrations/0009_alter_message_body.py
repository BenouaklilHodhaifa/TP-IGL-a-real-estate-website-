# Generated by Django 4.1.4 on 2023-01-03 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_rename_data_publication_ai_date_publication_ai_user_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='body',
            field=models.TextField(),
        ),
    ]
