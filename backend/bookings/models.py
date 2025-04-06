import uuid
from django.db import models

class Booking(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    booking_id = models.UUIDField(default=uuid.uuid4, unique=True)
    customer = models.CharField(max_length=255)
    ground = models.CharField(max_length=255)
    time = models.CharField(max_length=255)
    status = models.CharField(
        max_length=50,
        choices=[('paid', 'Paid'), ('unpaid', 'Unpaid')],
        default='unpaid'
    )
    date = models.DateField()
    user_id = models.UUIDField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "bookings"
        verbose_name = "Booking"
        verbose_name_plural = "Bookings"

    def __str__(self):
        return f"{self.customer} - {self.ground} ({self.date})"
