export type HelloComponent<Props extends {}, TestingGenerics> = (props: {
    data: Props;
    usefulState: TestingGenerics;
  }) => JSX.Element | null;