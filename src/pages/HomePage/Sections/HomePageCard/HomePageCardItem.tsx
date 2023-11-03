import Image from 'next/image';

import { Col, Row } from '@/components/Grid';
import Space from '@/components/Space';
import Text from '@/components/Text';
import { ReportDataState } from '@/constants/reports';
import { StyledContainerMonthItem } from '@/pages/HomePage/Sections/HomePageCard/_HomePageCard';
import colors from '@/utils/styles/theme/colors';

type HomePageCardItemProps = {
  index: number;
  data: ReportDataState;
};

const HomePageCardItem = ({ index, data }: HomePageCardItemProps) => {
  const image = data.profit >= 0 ? 'up' : 'down';

  return (
    <StyledContainerMonthItem variant={(index + 1) % 2 === 0}>
      <Row gutter={[12, 0]} align='middle' justify='center'>
        <Col span={8}>
          <Space fullWidth justify='center' align='center'>
            {image === 'up' ? (
              <Image
                src='/assets/images/sales-up.png'
                alt='sales image'
                width={60}
                height={60}
                priority
              />
            ) : (
              <Image
                src='/assets/images/sales-down.png'
                alt='sales image'
                width={60}
                height={60}
                priority
              />
            )}
          </Space>
        </Col>
        <Col span={8}>
          <Space direction='vertical' size={[19, 0]}>
            <Space direction='vertical'>
              <Text size={10} color={colors.B500}>
                Number of Sales
              </Text>
              <Text size={12} weight={700} color={colors.B500}>
                {data.numberOfSales}
              </Text>
            </Space>
            <Space direction='vertical'>
              <Text size={10} color={colors.B500}>
                Revenue
              </Text>
              <Text size={12} weight={700} color={colors.B500}>
                $ {data.revenue}
              </Text>
            </Space>
          </Space>
        </Col>
        <Col span={8}>
          <Space direction='vertical' size={[19, 0]}>
            <Space direction='vertical'>
              <Text size={10} color={colors.B500}>
                Profit
              </Text>
              <Text size={12} weight={700} color={colors.B500}>
                $ {data.profit}
              </Text>
            </Space>
            <Space direction='vertical'>
              <Text size={10} color={colors.B500}>
                Cost
              </Text>
              <Text size={12} weight={700} color={colors.B500}>
                $ {data.cost}
              </Text>
            </Space>
          </Space>
        </Col>
      </Row>
    </StyledContainerMonthItem>
  );
};

export default HomePageCardItem;
