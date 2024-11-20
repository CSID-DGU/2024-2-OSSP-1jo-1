import { useEffect, useRef, useState } from "react";
import * as S from "./Styled";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import RecordEditDropbox from "./RecordEditDropbox";

export default function RecordCard({ record }) {
  const [editModal, setEditModal] = useState(false);
  const editModalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (editModalRef.current && !editModalRef.current.contains(e.target)) {
        setEditModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <S.RecordCardWrapper ref={editModalRef}>
      <S.RecordCardContainer>
        <S.RecordCardRoutine>
          {record.routine_title}
          <S.RecordCardMore
            icon={faEllipsisVertical}
            onClick={() => setEditModal(!editModal)}
          />
          {editModal && <RecordEditDropbox editModalRef={editModalRef} />}
        </S.RecordCardRoutine>
        <S.RecordCardRoutineInfo>
          <S.RecordCardRoutineInfoText>
            {record.created_date}
          </S.RecordCardRoutineInfoText>
          <S.RecordCardRoutineInfoText>
            {record.routine_time}
          </S.RecordCardRoutineInfoText>
          <S.RecordCardRoutineInfoText>
            #{record.routine_place}
          </S.RecordCardRoutineInfoText>
        </S.RecordCardRoutineInfo>
        <S.RecordDescription>
          <S.RecordCardBookTitle>{record.book_title}</S.RecordCardBookTitle>
          {record.description}
        </S.RecordDescription>
      </S.RecordCardContainer>
    </S.RecordCardWrapper>
  );
}
