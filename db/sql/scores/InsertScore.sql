INSERT INTO public."Scores"
  ("eventId", "participantId", "fromUserId", "value")
VALUES
  (${eventId}, ${participantId}, ${userId}, ${score})
ON CONFLICT ON CONSTRAINT "UNIQUE_Score"
DO UPDATE
    SET "value" = ${score}
