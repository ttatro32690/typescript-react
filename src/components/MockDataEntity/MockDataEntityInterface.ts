interface MockDataEntity {
  id: number;
  isActive: boolean;
  description: string;
  meta: {
    edited: boolean;
    lastUpdatedDateTime: Date;
  };
}

export { MockDataEntity };
