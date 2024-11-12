export type Avatar = {
  alt: string;
  src: string;
};

export type DownloadedBy = {
  label: string;
  count: string;
};

export type DownloadInfo = {
  downloadedBy: DownloadedBy;
  avatars: Avatar[];
};

export type ResourceCard = {
  title: string;
  description: string;
  buttonText: string;
  icon: string;
  downloadInfo: DownloadInfo;
};

export type StatCardType = {
  label: string;
  value: string;
  buttonText?: string;
};

export type StatType = {
  card1: StatCardType;
  card2: StatCardType;
  card3: StatCardType;
}

export type ResourceTopicTypes = {
  title: string;
  topicsDescription: string;
  avatar: {
    src: string;
    alt: string;
  };
  statCards: StatType;
};

export type ResourceData = {
  resourceCard: ResourceCard;
  resourceTopics: ResourceTopicTypes;
};
