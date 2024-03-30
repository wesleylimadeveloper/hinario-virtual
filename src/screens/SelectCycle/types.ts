export type Data = {
  yearID: string;
  cycleID: string;
};

export type SelectCycleNavigationProps = {
  navigate(screen: string, data?: Data): void;
  goBack(): void;
};
