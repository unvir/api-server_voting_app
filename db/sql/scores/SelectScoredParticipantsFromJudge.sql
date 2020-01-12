SELECT scores."participantId", scores."value", scores."eventId", scores."fromUserId" as "judgeId"
FROM public."Scores" AS scores
WHERE scores."eventId" = ${eventId}
    AND scores."fromUserId" = ${judgeId}
