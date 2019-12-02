SELECT participants.*
FROM public."Participants" AS participants
INNER JOIN public."EventParticipants" AS eventParticipants
ON participants."id" = eventParticipants."participantId"
WHERE eventParticipants."eventId" = ${eventId}