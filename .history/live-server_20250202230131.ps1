D:
cd D:\VSLHR\ѧϰ�ʼ�\��Ŀ\My\H5\Q����
# write-host "�ѽ�����ĿĿ¼��������˿ںţ�Ĭ��8080����"
# powershell�û���������
$content = Read-Host "����������"
write-host "����������ǣ�$content"
if (!$content) {
    $content = 8081
}
live-server --port $content