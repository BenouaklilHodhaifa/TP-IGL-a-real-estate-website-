# Generated by Django 4.1.4 on 2023-01-03 19:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_message'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ai',
            old_name='data_Publication',
            new_name='date_Publication',
        ),
        migrations.AddField(
            model_name='ai',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='ais', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='message',
            name='vue',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='message',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='messages', to=settings.AUTH_USER_MODEL),
        ),
    ]
