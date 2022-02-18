import styled from "styled-components";

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: IPRICE; // type이 object일 때 interface로 따로 한 부분
}
interface IPRICE {
  USD: IQUOTES;
  KRW: IQUOTES;
  JPY: IQUOTES;
}
interface IQUOTES {
  ath_date: string;
  ath_price: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_1h: number;
  percent_change_1y: number;
  percent_change_6h: number;
  percent_change_7d: number;
  percent_change_12h: number;
  percent_change_15m: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_30m: number;
  percent_from_price_ath: number;
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
}

interface PriceProps {
  coinId: string;
  tickersData: PriceData | undefined;
}

function Price({ coinId, tickersData }: PriceProps) {
  return (
    <>
      <>Last Update : {tickersData?.last_updated}</>
      <Overview>
        <OverviewItem>
          <span>USD :</span>
          <span>{tickersData?.quotes.USD.price}</span>
        </OverviewItem>
        <OverviewItem>
          <span>KRW :</span>
          <span>{tickersData?.quotes.KRW.price}</span>
        </OverviewItem>
        <OverviewItem>
          <span>JPY :</span>
          <span>{tickersData?.quotes.JPY.price}</span>
        </OverviewItem>
      </Overview>
    </>
  );
}

export default Price;
