import { HashRouter as Router } from 'react-router-dom'
import { useEffect } from 'react'
import nprogress from 'nprogress'
import App from './App'

// antd
import { theme, ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

// antd主题
import type { RootState } from "@/stores"
import { useSelector } from "react-redux"
const { defaultAlgorithm, darkAlgorithm } = theme

function Page() {
  const theme = useSelector((state: RootState) => state.public.theme)

  // 顶部进度条
  useEffect(() => {
    nprogress.done()
    return () => {
      nprogress.start()
    }
  }, [])

  return (
    <Router>
      <ConfigProvider
        locale={zhCN}
        theme={{
          algorithm: [theme === 'dark' ? darkAlgorithm : defaultAlgorithm]
        }}
      >
        <App />
      </ConfigProvider>
    </Router>
  )
}

export default Page