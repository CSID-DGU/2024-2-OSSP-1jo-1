from django.urls import path
from .views import *
from . import views

app_name="clublist"
urlpatterns = [
    path('', ClubRoutineListAPIView.as_view(), name='club_routine_list'),  
    path('<int:club_id>/', ClubDetailAPIView.as_view(), name='club_routine_detail'), 
    path('create/', ClubCreateAPIView.as_view(), name='club_routine_create'),
    path('join/<int:club_id>/', JoinClubAPIView.as_view(), name='join_club'),
    path('search/', ClubSearchAPIView.as_view(), name='club-search'),  
]
