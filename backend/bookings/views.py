from rest_framework import generics
from .models import Booking
from .serializers import BookingSerializer

class BookingList(generics.ListAPIView):
    serializer_class = BookingSerializer

    def get_queryset(self):
        queryset = Booking.objects.all()
        customer = self.request.query_params.get('customer')
        ground = self.request.query_params.get('ground')
        date = self.request.query_params.get('date')
        booking_id = self.request.query_params.get('booking_id')
        status = self.request.query_params.get('status')

        if customer:
            queryset = queryset.filter(customer__icontains=customer)  # Case-insensitive search
        if ground:
            queryset = queryset.filter(ground__icontains=ground)  
        if date:
            queryset = queryset.filter(date=date)  # Exact date match
        if booking_id:
            queryset = queryset.filter(booking_id=booking_id)  # Exact match for UUID
        if status:
            queryset = queryset.filter(status=status)

        return queryset
