# Generated by Django 4.1.6 on 2023-02-03 21:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_alter_ai_information_adresse_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ai',
            name='prix',
            field=models.DecimalField(decimal_places=2, max_digits=50),
        ),
        migrations.AlterField(
            model_name='ai',
            name='surface',
            field=models.DecimalField(decimal_places=2, max_digits=50),
        ),
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ai', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ai_favorite', to='main.ai')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_favorite', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]