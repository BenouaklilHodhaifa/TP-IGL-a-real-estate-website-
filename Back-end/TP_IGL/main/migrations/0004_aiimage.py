# Generated by Django 4.1.4 on 2023-01-03 16:48

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_alter_ai_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='AiImage',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('image', models.ImageField(blank=True, default='', null=True, upload_to='img')),
                ('ai', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='image', to='main.ai')),
            ],
        ),
    ]
