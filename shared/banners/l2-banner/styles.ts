import styled from 'styled-components';
import { Button } from '@lidofinance/lido-ui';
import Icons from 'assets/icons/l2-swap.svg';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: ${({ theme }) => theme.spaceMap.lg}px;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
  gap: 10px;
  overflow: hidden;
  background-color: #07080c;
  background: radial-gradient(
    93.45% 103.1% at 6.55% 17.29%,
    #3c64b6 0%,
    #2e1d7b 55.75%,
    #142698 100%
  );
  box-sizing: border-box;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 6px;
    padding: ${({ theme }) => theme.spaceMap.md}px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    cursor: pointer;
    padding: ${({ theme }) => theme.spaceMap.sm}px;
  }
`;

export const L2Icons = styled.img.attrs({
  src: Icons,
  alt: '',
})`
  display: block;
  width: 162px;
  height: 32px;
`;

export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextHeader = styled.div`
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: #fff;
`;

export const TextWrap = styled.div`
  flex: 1 1 auto;
  color: #fff;
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  position: relative;
`;

export const ButtonLinkWrap = styled.a`
  display: block;

  ${({ theme }) => theme.mediaQueries.md} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const ButtonStyle = styled(Button)`
  padding: 7px 16px;
  font-size: 12px;
  line-height: 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;
