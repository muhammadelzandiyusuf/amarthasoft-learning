import Space from '@/components/Space';
import Text from '@/components/Text';
import { ReportDataState } from '@/constants/reports';
import { StyledContainerMonth } from '@/pages/HomePage/Sections/HomePageCard/_HomePageCard';
import HomePageCardItem from '@/pages/HomePage/Sections/HomePageCard/HomePageCardItem';
import colors from '@/utils/styles/theme/colors';

type HomePageCardProps = {
  data: ReportDataState[];
};

const HomePageCard = ({ data }: HomePageCardProps) => {
  return (
    <Space fullWidth direction='vertical'>
      <StyledContainerMonth>
        <Text size={12} weight={700} color={colors.B500}>
          {data[0]?.month}
        </Text>
      </StyledContainerMonth>
      {data.map((item, index) => (
        <HomePageCardItem key={index} index={index} data={item} />
      ))}
    </Space>
  );
};

export default HomePageCard;
