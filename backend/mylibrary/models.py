# mylibrary/models.py
from django.conf import settings
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    publisher = models.CharField(max_length=100)
    coverImage = models.URLField()
    summary = models.CharField(max_length=200)
    is_deleted = models.BooleanField(default=False)  # 소프트 삭제 필드

    def __str__(self):
        return self.title
    
class UserBook(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='user_books')
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='user_books')
    added_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.book.title}"

# class RoutineRecord(models.Model):
#     book = models.ForeignKey(Book, related_name='routine_records', on_delete=models.CASCADE)
#     completed_date = models.DateField()
#     is_deleted = models.BooleanField(default=False)  # 소프트 삭제 필드

#     def __str__(self):
#         return f"{self.book.title} - {self.completed_date}"
