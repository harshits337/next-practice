import React, { useState } from 'react';
import { Form, Input, Button, Upload, message, Image } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from './post.module.css';

const { TextArea } = Input;

const PostCreation: React.FC<{ onPost: (text: string, image: File | null) => void }> = ({ onPost }) => {
  const [form] = Form.useForm();
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleSubmit = (values: { text: string }) => {
    onPost(values.text, image);
    form.resetFields();
    setImage(null);
    setImagePreview(null);
    message.success('Post created successfully!');
  };

  const handleImageChange = (info: unknown) => {
    if (info?.file) {
      const file = info?.file?.originFileObj;
      if (file) {
        setImage(file);
        setImagePreview(URL.createObjectURL(file)); // Generate a preview URL
      }
    }
  };

  return (
    <div className={styles.postCreation}>
      <Form form={form} onFinish={handleSubmit}>
        {/* Text Area for Post Content */}
        <Form.Item name="text" rules={[{ required: true, message: 'Please write something!' }]}>
          <TextArea
            placeholder="What's on your mind?"
            autoSize={{ minRows: 3, maxRows: 6 }}
            className={styles.textArea}
          />
        </Form.Item>

        {/* Image Upload */}
        <Form.Item>
          <Upload
            accept="image/*"
            showUploadList={false}
            beforeUpload={() => false} // Prevent auto-upload
            onChange={handleImageChange}
          >
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
          {image && <span className={styles.imageName}>{image.name}</span>}
        </Form.Item>

        {/* Image Preview */}
        {imagePreview && (
          <div className={styles.imagePreview}>
            <Image
              src={imagePreview}
              alt="Preview"
              width={200}
              height={150}
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        )}

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.submitButton}>
            Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PostCreation;