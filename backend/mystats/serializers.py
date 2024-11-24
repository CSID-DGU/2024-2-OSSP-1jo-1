# serializers.py 
from rest_framework import serializers
from routinelist.models import Routine, RoutineComplete

class RoutineCompleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoutineComplete
        fields = ['id', 'date', 'routine', 'location', 'memo']  # 'created_date'를 'date'로 수정
        
class RoutineSerializer(serializers.ModelSerializer):
    completions = RoutineCompleteSerializer(many=True, read_only=True, source='routinecomplete_set')

    class Meta:
        model = Routine
        fields = ['id', 'title', 'time', 'content', 'is_club', 'completions']