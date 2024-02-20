from django.urls import path
from .views import hello_world
from .views import rate_update
from .views import average_rate

urlpatterns = [
        path('hello-world', hello_world),
        path('updating-rate', rate_update),
        path('getting-average', average_rate)
]
