SELECT participants."id" AS "participantId",
  participants."fullName",
  SUM(scores."value") AS "totalScore"
FROM public."Scores" AS scores
INNER JOIN public."Participants" AS participants
ON participants."id" = scores."participantId"
WHERE scores."eventId" = ${eventId}
GROUP BY participants."id"