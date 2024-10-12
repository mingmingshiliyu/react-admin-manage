import { Flex } from "antd";
import KafkaTab from "./components/tab";
import BaseContent from '@/components/Content/BaseContent';
import { useCommonStore } from '@/hooks/useCommonStore';
import { checkPermission } from '@/utils/permissions';
import type { PagePermission } from '#/public';

function Kakfa() {
  const { permissions } = useCommonStore();
    // 权限前缀
    const permissionPrefix = '/content/article';

    // 权限
    const pagePermission: PagePermission = {
      page: checkPermission(`${permissionPrefix}/index`, permissions),
      create: checkPermission(`${permissionPrefix}/create`, permissions),
      update: checkPermission(`${permissionPrefix}/update`, permissions),
      delete: checkPermission(`${permissionPrefix}/delete`, permissions)
    };
  return (
    // <BaseContent isPermission={pagePermission.page}>
      <Flex>
        <KafkaTab/>
      </Flex>
    // </BaseContent>
  )
}

export default Kakfa;