import React from 'react'
import { Select, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configStore';
type Props = {}

export default function HeaderTitle({ }: Props) {
  const user = useSelector((state: RootState) => state.user)
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className='bg-slate-200'>
      <div className=' flex justify-between items-center w-full max-w-screen-2xl m-auto' style={{ height: 50 }}>
        <div>Logo</div>
        <div >
          <Space>
            <NavLink to={'/login'}>Log in {user}</NavLink>
            <Select
              defaultValue="vni"
              style={{ width: 70 }}
              onChange={handleChange}
              options={[
                { value: 'vni', label: 'VNI' },
                { value: 'eng', label: 'ENG' },
                { value: 'chi', label: 'CHI' },

              ]}
            />
          </Space>
        </div>
      </div>
    </div>

  )
}