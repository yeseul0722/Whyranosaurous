import { useState } from 'react';
import Button from '../../../../components/button';
import { EnrollShowPropsType } from '../../Map.type';
import { StyledBox, StyledFestivalList, StyledSubTitle } from './EnrollShow.styled';
import Input from '../../../../components/input';
import FestivalInfo from '../festivalinfo';
import enrollShowPost from '../../../../apis/show/enrollShowPost';

const EnrollShow = ({ place, festivals }: EnrollShowPropsType) => {
  const [input, setInput] = useState<{ name: string; date: string; time: string } | null>(null);

  const handleAddClick = () => {
    setInput({ name: '', date: '', time: '' });
  };
  const handleSaveClick = async () => {
    // console.log(`${input?.date} ${input?.time}`);
    try {
      const data = {
        name: input?.name,
        startTime: `${input?.date} ${input?.time}`,
        placeId: place?.id,
      };
      const response = await enrollShowPost(data);
      if (response) {
        // console.log('Successfully posted:', response);
      }
    } catch (err) {
      // console.error('Error posting data:', err);
    }
  };

  const handleChange = (field: string, value: string) => {
    if (input) setInput({ ...input, [field]: value });
  };

  return (
    <div>
      <div style={{ height: '77vh', overflowY: 'auto', overflowX: 'hidden', paddingRight: '7px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <StyledSubTitle>장소 이름</StyledSubTitle>
            <StyledBox>
              <div style={{ paddingLeft: '15px' }}> {place && place.name ? place.name : ''}</div>
            </StyledBox>
          </div>
          {!place && <StyledSubTitle> 등록된 장소를 클릭해주세요!</StyledSubTitle>}
          {festivals && festivals.length > 0 && (
            <StyledFestivalList>
              <StyledSubTitle>공연 목록</StyledSubTitle>
              <div>
                {festivals.map((festival) => (
                  <div key={festival.id} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <FestivalInfo festival={festival} />
                  </div>
                ))}
              </div>
            </StyledFestivalList>
          )}
          {place && (
            <div style={{ height: '35px' }}>
              <Button ismain="true" label={'공연 추가하기'} onClick={handleAddClick} />
            </div>
          )}
          {input && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '90px',
                justifyContent: 'space-around',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ height: '35px', width: '135px' }}>
                  <Input
                    type="text"
                    placeholder="공연 이름"
                    value={input.name}
                    onChange={(e: any) => handleChange('name', e.target.value)}
                  />
                </div>
                <div style={{ display: 'flex', gap: '3px' }}>
                  <div style={{ height: '39px', width: '45px' }}>
                    <Button
                      ismain="false"
                      label={'삭제'}
                      style={{ border: '1.6px solid #599198' }}
                      onClick={() => setInput(null)} // input 객체 삭제
                    />
                  </div>
                  <div style={{ height: '39px', width: '45px' }}>
                    <Button ismain="true" label={'저장'} onClick={handleSaveClick} />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '11px' }}>
                <div style={{ width: '47%', height: '35px' }}>
                  <Input type="date" value={input.date} onChange={(e: any) => handleChange('date', e.target.value)} />
                </div>
                <div style={{ width: '47%', height: '35px' }}>
                  <Input type="time" value={input.time} onChange={(e: any) => handleChange('time', e.target.value)} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollShow;
