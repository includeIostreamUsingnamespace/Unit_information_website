# import os
#
#
# def remove_download_suffix(directory):
#     """
#     遍历指定目录及其子目录中的所有文件，如果文件后缀是`.下载`，则将其删除。
#
#     :param directory: 要遍历的目录路径
#     """
#     # 遍历目录及其子目录
#     for root, dirs, files in os.walk(directory):
#         for file in files:
#             # 检查文件后缀是否是`.下载`
#             if file.endswith('.下载'):
#                 # 获取文件的完整路径
#                 old_file_path = os.path.join(root, file)
#                 # 新文件名（去掉`.下载`后缀）
#                 new_file_path = os.path.join(root, file[:-3])  # 去掉最后3个字符（.下载）
#
#                 # 重命名文件
#                 try:
#                     os.rename(old_file_path, new_file_path)
#                     print(f'重命名成功: {old_file_path} -> {new_file_path}')
#                 except Exception as e:
#                     print(f'重命名失败: {old_file_path} -> {new_file_path}, 错误: {e}')
#
#
# if __name__ == '__main__':
#     # 直接在代码中指定要遍历的目录
#     target_directory = '../'
#
#     # 检查目录是否存在
#     if os.path.isdir(target_directory):
#         remove_download_suffix(target_directory)
#         print('处理完成！')
#     else:
#         print('目录不存在，请检查路径是否正确。')