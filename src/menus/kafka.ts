import type { SideMenu } from '#/public';

export const kafka: SideMenu[] = [
  {
    label: 'Kafka',
    labelEn: 'Kafka',
    key: '/kafka',
    icon: 'la:tachometer-alt',
    rule: '/demo', //权限
    children: [
      {
        label: 'kafka',
        labelEn: 'Data Overview',
        key: '/kafka',
        rule: '/demo', //权限
      },
      {
        label: 'detail',
        labelEn: 'detail',
        key: '/kafka/clusterinfo',
        rule: '/demo', //权限
      }
    ]
  },
]