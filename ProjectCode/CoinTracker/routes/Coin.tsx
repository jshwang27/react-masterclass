import { fetchCoinInfo, fetchCoinTickers } from "api";
//import { Helmet } from "react-helmet"; 이 부분 warning 에러 발생하여 아래처럼 작성함
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  useParams,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "atoms";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const BackButton = styled.h4`
  font-size: 20px;
  margin: 5px 0px;
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.accentColor};
`;

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

const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

/*
인터페이스 정의 시 크롬의 기능을 사용해 키값과 타입값을 복사해온 후
단축키를 사용해서 아래처럼 만든다.
*/
interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  contract: string;
  platform: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

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
  // quotes: {
  //   USD: {
  //     ath_date: string;
  //     ath_price: number;
  //     market_cap: number;
  //     market_cap_change_24h: number;
  //     percent_change_1h: number;
  //     percent_change_1y: number;
  //     percent_change_6h: number;
  //     percent_change_7d: number;
  //     percent_change_12h: number;
  //     percent_change_15m: number;
  //     percent_change_24h: number;
  //     percent_change_30d: number;
  //     percent_change_30m: number;
  //     percent_from_price_ath: number;
  //     price: number;
  //     volume_24h: number;
  //     volume_24h_change_24h: number;
  //   };
  // };
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

interface ICoinProps {}

function Coin({}: ICoinProps) {
  const isDark = useRecoilValue(isDarkAtom);

  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    { refetchInterval: 5000 }
  );
  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPrice] = useState<PriceData>();
  // const [quotes, setQuotes] = useState<IUSD>();

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //     ).json();
  //     const priceData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //     ).json();
  //     setInfo(infoData);
  //     setPrice(priceData);
  //     setQuotes(priceData.quotes?.USD);
  //     setLoading(false);
  //   })();
  // }, [coinId]);

  const loading = infoLoading || tickersLoading;

  return (
    <Container>
      <HelmetProvider>
        <Helmet>
          <title>
            {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
          </title>
        </Helmet>
      </HelmetProvider>
      <BackButton>{isDark ? "◁" : "◀︎"}Back</BackButton>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>RANK : </span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>SYMBOL: </span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>OPEN SOURCE : </span>
              <span>{infoData?.open_source ? "YES" : "NO"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            <span>{infoData?.description}</span>
          </Description>
          <Overview>
            <OverviewItem>
              <span>TOTAL SUPLY : </span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>MAX SUPPLY : </span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
              {/* <Link
                to={{
                  pathname: `/${coinId}/price`,
                  state: { data: tickersData },
                }}
              >
                Price
              </Link> */}
            </Tab>
          </Tabs>

          <Switch>
            <Route path={`/:coinId/price`}>
              <Price coinId={coinId} tickersData={tickersData} />
            </Route>
            <Route path={`/${coinId}/chart`}>
              <Chart coinId={coinId} />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default Coin;
