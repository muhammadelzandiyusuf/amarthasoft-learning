import { useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Space from '@/components/Space';
import Text from '@/components/Text';
import dataReports from '@/constants/reports';
import { StyledContainer, StyledContentTitle } from '@/pages/HomePage/_HomeStyle';
import HomePageCard from '@/pages/HomePage/Sections/HomePageCard';
import { selectReportState, reportSlice } from '@/store/report/reportSlice';
import colors from '@/utils/styles/theme/colors';

const HomePage = () => {
  const reportState = useSelector(selectReportState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reportSlice.actions.setReportState(dataReports));
  }, [dispatch]);

  const dataReportFilter = useMemo(() => {
    const monthAugust = reportState.filter((item) => item.month === 'August 2023');
    const monthJuly = reportState.filter((item) => item.month === 'July 2023');
    return { monthAugust, monthJuly };
  }, [reportState]);

  return (
    <section>
      <Space fullWidth direction='vertical' size={[0, 19]} justify='center' align='center'>
        <StyledContainer>
          <StyledContentTitle>
            <Text size={16} weight={800} color={colors.B500}>
              Monthly Report
            </Text>
          </StyledContentTitle>
          <HomePageCard data={dataReportFilter.monthAugust} />
          <HomePageCard data={dataReportFilter.monthJuly} />
        </StyledContainer>
      </Space>
    </section>
  );
};

export default HomePage;
