import React, { useEffect, useRef, useState } from 'react'
import { Table, Breadcrumb, Button, Space, Popconfirm, message, Input, Image, Tag, InputRef, Tooltip } from 'antd';
import AdminPageHeader from '../../../components/AdminPageHeader'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import { useDispatch } from 'react-redux'
import { GrammarType } from '../../../types/grammar'
import moment from 'moment'
import { FilterConfirmProps, Key, TableRowSelection } from 'antd/lib/table/interface'
import type { ColumnsType, ColumnType } from 'antd/es/table';
import { changeBreadcrumb, getListGrammarSlice, removeGrammaSlice } from '../../../features/Slide/grammar/Grammar';
import { getGrammarDetail } from '../../../api/grammar';
import { SearchOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';

interface DataType {
  key: React.Key,
  _id?: string,
  title: string,
  day: string
}

type DataIndex = keyof DataType;


const ListGrammar = () => {
  const breadcrumb = useAppSelector(data => data.grammar.breadcrumb)
  const grammars = useAppSelector(item => item.grammar.value)
  console.log('grammars', grammars);
  const dispatch = useDispatch()
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selected, setSelected] = useState<{ key: number, id: string | undefined }[]>([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  //------------------STATE--------------------


  const dataTable = grammars.map((item: GrammarType, index) => {
    return {
      key: index + 1,
      _id: item._id,
      title: item.title,
      createdAt: moment(item.createdAt).format("h:mm:ss a, MMM Do YYYY"),
      updatedAt: moment(item.updatedAt).format("h:mm:ss a, MMM Do YYYY")
    }
  })

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };


  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Tìm Kiếm ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Tìm
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Xóa
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Lọc
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record: any) => {
      return record[dataIndex].toString().toLowerCase().includes((value as string).toLowerCase())
    }

  });
  const handleOk = (id) => {
    const key = 'updatable';
    setConfirmLoading(true);
    console.log(id);
    message.loading({ content: 'Loading...', key });

    setTimeout(() => {
      if (Array.isArray(id)) {
        dispatch(removeGrammaSlice(id))
      } else {
        dispatch(removeGrammaSlice(id))
      }
      setConfirmLoading(false);
      message.success({ content: 'Xóa Thành Công!', key, duration: 2 });
    }, 2000);
  };

  const handleCancel = () => {
    message.error('Hủy Hành Động!');
  };


  //------------------REMOVE-CONFIRM-------------------
  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'key',
      key: "key",
      sorter: (a: any, b: any) => a.key - b.key,
      sortDirections: ['descend'],
      width: 60,
    },
    {
      title: 'ID',
      dataIndex: '_id',
      key: "_id",
      ...getColumnSearchProps('_id'),
      sorter: (a: any, b: any) => a._id - b._id,
      sortDirections: ['descend'],
      ellipsis: {
        showTitle: false,
      },
      render: item => (
        <Tooltip placement="topLeft" title={item}>
          {item}
        </Tooltip>
      ),
    },

    {
      title: 'Chủ đề',
      dataIndex: 'title',
      key: "title",
      ...getColumnSearchProps('title'),
      ellipsis: {
        showTitle: false,
      },
      render: item => (
        <Tooltip placement="topLeft" title={item}>
          {item}
        </Tooltip>
      ),
    },
    {
      title: 'Ngày Tạo',
      dataIndex: 'createdAt',
      key: "createdAt",
      ellipsis: {
        showTitle: false,
      },
      render: item => (
        <Tooltip placement="topLeft" title={item}>
          {item}
        </Tooltip>
      ),
    },
    {
      title: 'Ngày Update',
      dataIndex: 'updatedAt',
      key: "updatedAt",
      ellipsis: {
        showTitle: false,
      },
      render: item => (
        <Tooltip placement="topLeft" title={item}>
          {item}
        </Tooltip>
      ),
    },
    {
      title: "Hành Động", key: "action", render: (text, record) => (
        <Space align="center" size="middle">
          <Button style={{ background: "#198754" }} >
            <Link to={`/admin/category/edit/${record._id}`} >
              <span className="text-white"><SettingOutlined /></span>
            </Link>
          </Button>
          <Popconfirm
            placement="topRight"
            title="Bạn Có Muốn Xóa?"
            okText="Có"
            cancelText="Không"
            onConfirm={() => { handleOk(record._id) }}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={handleCancel}
          >
            <Button type="primary" danger >
              <DeleteOutlined />
            </Button>
          </Popconfirm>

        </Space>
      ),
    }
  ];
  useEffect(() => {
    dispatch(changeBreadcrumb("Quản Lý Đề Tài"))
    dispatch(getListGrammarSlice())
  }, [])


  return (

    <div>
      <AdminPageHeader breadcrumb={breadcrumb} />
      <Button type="primary" className="my-6" >
        <Link to={`/admin/grammar/add`}>Thêm Ngữ Pháp</Link>
      </Button>
      <Popconfirm
        title="Bạn Có Muốn Xóa Hết?"
        okText="Có"
        cancelText="Không"
      >
        <Button className='ml-4' type="primary" danger >
          Xóa Hết
        </Button>
      </Popconfirm>

      <Table
        rowClassName={"break-words"}
        bordered
      />
    </div>
  )
}

export default ListGrammar