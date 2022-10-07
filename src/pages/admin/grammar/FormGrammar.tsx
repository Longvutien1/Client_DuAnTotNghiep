import React, { useEffect, useState } from 'react'
import { Button, Form, Input, InputNumber, message, Select, Upload } from 'antd'
import AdminPageHeader from '../../../components/AdminPageHeader';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useForm } from 'react-hook-form';
import { GrammarType } from '../../../types/grammar';
import { useNavigate, useParams } from 'react-router-dom';
import { changeBreadcrumb, createGrammarSlice, editGrammarSlice, getListGrammarSlice } from '../../../features/Slide/grammar/Grammar';
import { getGrammarDetail } from '../../../api/grammar';


const FormGrammar = () => {
    const breadcrumb = useAppSelector(data => data.grammar.breadcrumb)
    const { Option } = Select;
    const [form] = Form.useForm();
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm()
    const grammars = useAppSelector(data => data.grammar.value)
    const [grammar, setGrammar] = useState<GrammarType>()
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const { id } = useParams();
    const onFinish = async (value) => {

        console.log("value", value);

        const key = 'updatable';

        message.loading({ content: 'Loading...', key });
        setTimeout(() => {
            if (id) {
                dispatch(editGrammarSlice(value));
                message.success({ content: 'Sửa Thành Công!', key, duration: 2 });
                navigate("/admin/grammar");
            } else {
                dispatch(createGrammarSlice(value));
                message.success({ content: 'Thêm Thành Công!', key, duration: 2 });
                // navigate("/admin/grammar");
            }

        }, 2000);

    };
    const onFinishFailed = (errorInfo) => {

        id ? message.error('Sửa Không Thành Công!') : message.error('Thêm Không Thành Công!');
    };
    const onReset = () => {
        form.resetFields();
    };


    useEffect(() => {
        if (id) {
            const getQuiz = async () => {
                const { data } = await getGrammarDetail(id)
                // console.log("data edit", data);
                setGrammar(data)
                form.setFieldsValue(data);
                dispatch(changeBreadcrumb("Sửa grammar"))
            }
            getQuiz()
        } else {
            dispatch(changeBreadcrumb("Thêm gramamr"))
        }

        dispatch(getListGrammarSlice())

    }, [])

    return (
        <div>
            <AdminPageHeader breadcrumb={breadcrumb} />
            <Form layout="vertical" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                {id ? <Form.Item label="_id" name="_id" hidden={true}>
                    <Input />
                </Form.Item> : ""}
                <Form.Item
                    label="Chủ đề"
                    name="title"
                    tooltip="Đáp án dành cho Quiz"
                    rules={[{ required: true, message: 'Không để Trống!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item className='float-right'>
                    <Button className='inline-block mr-2' type="primary" htmlType="submit" >
                        {id ? "Sửa" : "Thêm"}
                    </Button>
                    <Button className='inline-block ' type="primary" danger onClick={() => { onReset() }}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default FormGrammar