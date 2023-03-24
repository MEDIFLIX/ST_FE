import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  height: 100%;
  .imgBox {
    background-color: #e1acac;
    width: 73px;
    height: 71px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .labelBox {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const ClinicIcon = styled.img`
  width: 37px;
  height: 37px;
`;

type ListItemsProp = {
  labels: string[];
};

const ListItems = ({ labels }: ListItemsProp) => {
  return (
    <ListContainer>
      <div className="imgBox">
        <ClinicIcon src="/img/clinical_notes.svg" alt="Clinic" />
      </div>
      {labels.map((val, idx) => (
        <div className="labelBox">
          <div>{`${idx + 1}순위`}</div>
          <div>{val}</div>
        </div>
      ))}
    </ListContainer>
  );
};

export default ListItems;
