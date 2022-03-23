import cgi, sys,os


def my_function(list,arr):
  f = open('text.txt', 'w')
  for i in range(len(list)):
    f.write(list[i] +": "+ data[i]+'\n')
  f.close()

form = cgi.FieldStorage()         # извлечь данные из формы
print("Content­type: text/html")  # плюс пустая строка

html1 = """
<TITLE>таблица с анкетой</TITLE>
 <link rel="stylesheet" href="style.css">
<H1>Анкета пользователя</H1>
<table border =2> <tr>  <td>Имя поля</td><td>Значение</td>  </tr>
"""

# печать заголовка таблицы
print (html1)

ll = ['ФИО','Номер телефона','Почта', 'Дата рождения','Город','Вакансия','Качества','Файл']

data = ['','','','','','','','']; i=0
for field in ('name', 'numTell', 'email', 'birthday', 'sity','job','quality',"myFile"):
    if not field in form:
        data[i] = '(unknown)'
    else:
        if not isinstance(form[field], list):
            data[i] = form[field].value
        else:
            values = [x.value for x in form[field]]
            data[i] = ', '.join(values)
    i+=1
for i in range(8):
     print ('<tr><td> %s </td> <td> %s </td></tr>'% (ll[i], data[i]))
print ('</table>')
my_function(ll,data)

