D:
cd D:/VSLHR/ѧϰ�ʼ�/��Ŀ/My/H5/Q����
write-host "�ѽ�����ĿĿ¼��������˿ںţ�Ĭ��8080����"
# powershell�û���������
$content = Read-Host "����������"
if (!$content) {
    $content = 8080
}
write-host "����������ǣ�$content"
live-server --port=$content