D:
cd D:/VSLHR/ѧϰ�ʼ�/��Ŀ/My/H5/Q����
write-host "�ѽ�����ĿĿ¼"
# powershell�û���������
$content = Read-Host "������˿ںţ�Ĭ��8080����"
if (!$content) {
    $content = 8080
}
write-host "����������ǣ�$content"
live-server --port=$content