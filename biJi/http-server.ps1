D:
cd D:/VSLHR/ѧϰ�ʼ�/��Ŀ/My/H5/Q����
write-host "�ѽ�����ĿĿ¼"
# powershell�û���������
$content = Read-Host "������˿ںţ�Ĭ��8080��"
if (!$content) {
    $content = 8080
    write-host "δ�������ݣ�������ΪĬ�϶˿ڣ�$content"
} elseif ($content -match "^\d+(\.\d+)?$") {
    write-host "�����ö˿ڣ�$content"
} else {
    $content = 8080
    write-host "����������Ч��������ΪĬ�϶˿ڣ�$content"
}
write-host "������������..."
http-server -p $content