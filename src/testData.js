const testData = JSON.parse(
	'{"nameTest":"HADS","nameDescription":"Hads","nameId":1,"data":[{"question":"\u042f \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u044e \u043d\u0430\u043f\u0440\u0443\u0436\u0435\u043d\u0456\u0441\u0442\u044c, \u043c\u0435\u043d\u0456 \u043d\u0435 \u043f\u043e \u0441\u043e\u0431\u0456.","number_question":1,"replies":[{"bal":3,"reply":"\u0412\u0435\u0441\u044c \u0447\u0430\u0441."},{"bal":2,"reply":"\u0427\u0430\u0441\u0442\u043e."},{"bal":1,"reply":"\u0427\u0430\u0441 \u0432\u0456\u0434 \u0447\u0430\u0441\u0443, \u0456\u043d\u043e\u0434\u0456."},{"bal":0,"reply":"\u0417\u043e\u0432\u0441\u0456\u043c \u043d\u0435 \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u044e."}]},{"question":"\u0422\u0435, \u0449\u043e \u0440\u0430\u043d\u0456\u0448\u0435 \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u043b\u043e \u043c\u0435\u043d\u0456 \u0432\u0435\u043b\u0438\u043a\u0435 \u0437\u0430\u0434\u043e\u0432\u043e\u043b\u0435\u043d\u043d\u044f, \u0456 \u0437\u0430\u0440\u0430\u0437 \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0454 \u0443 \u043c\u0435\u043d\u0435 \u0442\u0430\u043a\u0435 \u0436 \u043f\u043e\u0447\u0443\u0442\u0442\u044f.","number_question":2,"replies":[{"bal":0,"reply":"\u0411\u0435\u0437\u0443\u043c\u043e\u0432\u043d\u043e \u0446\u0435 \u0442\u0430\u043a."},{"bal":1,"reply":"\u041d\u0430\u043f\u0435\u0432\u043d\u043e, \u0446\u0435 \u0442\u0430\u043a."},{"bal":2,"reply":"\u041b\u0438\u0448\u0435 \u0432 \u0434\u0443\u0436\u0435 \u043c\u0430\u043b\u043e\u043c\u0443 \u0441\u0442\u0443\u043f\u0435\u043d\u0456 \u0446\u0435 \u0442\u0430\u043a."},{"bal":3,"reply":"\u0426\u0435 \u0437\u043e\u0432\u0441\u0456\u043c \u043d\u0435 \u0442\u0430\u043a."}]},{"question":"\u042f \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u044e \u0441\u0442\u0440\u0430\u0445, \u0437\u0434\u0430\u0454\u0442\u044c\u0441\u044f, \u043d\u0456\u0431\u0438 \u0449\u043e\u0441\u044c \u0436\u0430\u0445\u043b\u0438\u0432\u0435 \u043c\u043e\u0436\u0435 \u043e\u0441\u044c-\u043e\u0441\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u044f.","number_question":3,"replies":[{"bal":3,"reply":"\u0411\u0435\u0437\u0443\u043c\u043e\u0432\u043d\u043e \u0446\u0435 \u0442\u0430\u043a, \u0456 \u0441\u0442\u0440\u0430\u0445 \u0434\u0443\u0436\u0435 \u0441\u0438\u043b\u044c\u043d\u0438\u0439."},{"bal":2,"reply":"\u0426\u0435 \u0442\u0430\u043a, \u0430\u043b\u0435 \u0441\u0442\u0440\u0430\u0445 \u043d\u0435 \u0434\u0443\u0436\u0435 \u0441\u0438\u043b\u044c\u043d\u0438\u0439."},{"bal":1,"reply":"\u0406\u043d\u043e\u0434\u0456, \u0430\u043b\u0435 \u0446\u0435 \u043c\u0435\u043d\u0435 \u043d\u0435 \u0442\u0443\u0440\u0431\u0443\u0454."},{"bal":0,"reply":"\u0417\u043e\u0432\u0441\u0456\u043c \u043d\u0435 \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u044e."}]},{"question":"\u042f \u0437\u0434\u0430\u0442\u043d\u0438\u0439 \u0440\u043e\u0437\u0441\u043c\u0456\u044f\u0442\u0438\u0441\u044f \u0456 \u043f\u043e\u0431\u0430\u0447\u0438\u0442\u0438 \u0432 \u0442\u0456\u0439 \u0447\u0438 \u0456\u043d\u0448\u0456\u0439 \u043f\u043e\u0434\u0456\u0457 \u0441\u043c\u0456\u0448\u043d\u0435.","number_question":4,"replies":[{"bal":1,"reply":"\u041d\u0430\u043f\u0435\u0432\u043d\u043e, \u0446\u0435 \u0442\u0430\u043a."},{"bal":2,"reply":"\u041b\u0438\u0448\u0435 \u0432 \u0434\u0443\u0436\u0435 \u043c\u0430\u043b\u043e\u043c\u0443 \u0441\u0442\u0443\u043f\u0435\u043d\u0456 \u0446\u0435 \u0442\u0430\u043a."},{"bal":3,"reply":"\u0417\u043e\u0432\u0441\u0456\u043c \u043d\u0435 \u0437\u0434\u0430\u0442\u043d\u0438\u0439."},{"bal":0,"reply":"\u0411\u0435\u0437\u0443\u043c\u043e\u0432\u043d\u043e \u0446\u0435 \u0442\u0430\u043a."}]},{"question":"\u041d\u0435\u0441\u043f\u043e\u043a\u0456\u0439\u043d\u0456 \u0434\u0443\u043c\u043a\u0438 \u043a\u0440\u0443\u0442\u044f\u0442\u044c\u0441\u044f \u0443 \u043c\u0435\u043d\u0435 \u0432 \u0433\u043e\u043b\u043e\u0432\u0456.","number_question":5,"replies":[{"bal":3,"reply":"\u041f\u043e\u0441\u0442\u0456\u0439\u043d\u043e."},{"bal":2,"reply":"\u0412\u0435\u043b\u0438\u043a\u0443 \u0447\u0430\u0441\u0442\u0438\u043d\u0443 \u0447\u0430\u0441\u0443."},{"bal":1,"reply":"\u0427\u0430\u0441 \u0432\u0456\u0434 \u0447\u0430\u0441\u0443 \u0456 \u043d\u0435 \u0442\u0430\u043a \u0447\u0430\u0441\u0442\u043e."},{"bal":0,"reply":"\u0422\u0456\u043b\u044c\u043a\u0438 \u0456\u043d\u043e\u0434\u0456."}]},{"question":"\u042f \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u044e \u0431\u0430\u0434\u044c\u043e\u0440\u0456\u0441\u0442\u044c.","number_question":6,"replies":[{"bal":3,"reply":"\u0417\u043e\u0432\u0441\u0456\u043c \u043d\u0435 \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u044e."},{"bal":2,"reply":"\u0414\u0443\u0436\u0435 \u0440\u0456\u0434\u043a\u043e."},{"bal":1,"reply":"\u0406\u043d\u043e\u0434\u0456."},{"bal":0,"reply":"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u043e \u0432\u0435\u0441\u044c \u0447\u0430\u0441."}]},{"question":"\u042f \u043b\u0435\u0433\u043a\u043e \u043c\u043e\u0436\u0443 \u0441\u0456\u0441\u0442\u0438 \u0456 \u0440\u043e\u0437\u0441\u043b\u0430\u0431\u0438\u0442\u0438\u0441\u044f.","number_question":7,"replies":[{"bal":0,"reply":"\u0411\u0435\u0437\u0443\u043c\u043e\u0432\u043d\u043e \u0446\u0435 \u0442\u0430\u043a."},{"bal":1,"reply":"\u041d\u0430\u043f\u0435\u0432\u043d\u043e, \u0446\u0435 \u0442\u0430\u043a."},{"bal":2,"reply":"\u041b\u0438\u0448\u0435 \u0437\u0440\u0456\u0434\u043a\u0430 \u0446\u0435 \u0442\u0430\u043a."},{"bal":3,"reply":"\u0417\u043e\u0432\u0441\u0456\u043c \u043d\u0435 \u043c\u043e\u0436\u0443."}]},{"question":"\u041c\u0435\u043d\u0456 \u0437\u0434\u0430\u0454\u0442\u044c\u0441\u044f, \u0449\u043e \u044f \u043f\u043e\u0447\u0430\u0432 \u0432\u0441\u0435 \u0440\u043e\u0431\u0438\u0442\u0438 \u0434\u0443\u0436\u0435 \u043f\u043e\u0432\u0456\u043b\u044c\u043d\u043e.","number_question":8,"replies":[{"bal":3,"reply":"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u043e \u0432\u0435\u0441\u044c \u0447\u0430\u0441."},{"bal":2,"reply":"\u0427\u0430\u0441\u0442\u043e."},{"bal":1,"reply":"\u0406\u043d\u043e\u0434\u0456."},{"bal":0,"reply":"\u0417\u043e\u0432\u0441\u0456\u043c \u043d\u0456."}]},{"question":"\u042f \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u044e \u0432\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u0454 \u043d\u0430\u043f\u0440\u0443\u0436\u0435\u043d\u043d\u044f \u0430\u0431\u043e \u0442\u0440\u0435\u043c\u0442\u0456\u043d\u043d\u044f.","number_question":9,"replies":[{"bal":0,"reply":"\u0417\u043e\u0432\u0441\u0456\u043c \u043d\u0435 \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u044e."},{"bal":1,"reply":"\u0406\u043d\u043e\u0434\u0456."},{"bal":2,"reply":"\u0427\u0430\u0441\u0442\u043e."},{"bal":3,"reply":"\u0414\u0443\u0436\u0435 \u0447\u0430\u0441\u0442\u043e."}]},{"question":"\u042f \u043d\u0435 \u0441\u0442\u0435\u0436\u0443 \u0437\u0430 \u0441\u0432\u043e\u0454\u044e \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u0441\u0442\u044e.","number_question":10,"replies":[{"bal":3,"reply":"\u0411\u0435\u0437\u0443\u043c\u043e\u0432\u043d\u043e \u0446\u0435 \u0442\u0430\u043a."},{"bal":2,"reply":"\u042f \u043d\u0435 \u043f\u0440\u0438\u0434\u0456\u043b\u044f\u044e \u0446\u044c\u043e\u043c\u0443 \u0441\u0442\u0456\u043b\u044c\u043a\u0438 \u0447\u0430\u0441\u0443, \u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e."},{"bal":1,"reply":"\u041c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438, \u044f \u0441\u0442\u0430\u0432 \u043c\u0435\u043d\u0448\u0435 \u043f\u0440\u0438\u0434\u0456\u043b\u044f\u0442\u0438 \u0446\u044c\u043e\u043c\u0443 \u0443\u0432\u0430\u0433\u0438."},{"bal":0,"reply":"\u042f \u0441\u0442\u0435\u0436\u0443 \u0437\u0430 \u0441\u043e\u0431\u043e\u044e \u0442\u0430\u043a \u0441\u0430\u043c\u043e, \u044f\u043a \u0456 \u0440\u0430\u043d\u0456\u0448\u0435."}]},{"question":"\u042f \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u044e \u043d\u0435\u043f\u043e\u0441\u0438\u0434\u044e\u0447\u0456\u0441\u0442\u044c, \u043d\u0435\u043c\u043e\u0432 \u043c\u0435\u043d\u0456 \u043f\u043e\u0441\u0442\u0456\u0439\u043d\u043e \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044f.","number_question":11,"replies":[{"bal":3,"reply":"\u0411\u0435\u0437\u0443\u043c\u043e\u0432\u043d\u043e \u0446\u0435 \u0442\u0430\u043a."},{"bal":2,"reply":"\u041d\u0430\u043f\u0435\u0432\u043d\u043e, \u0446\u0435 \u0442\u0430\u043a."},{"bal":1,"reply":"\u041b\u0438\u0448\u0435 \u0432 \u0434\u0435\u044f\u043a\u0456\u0439 \u043c\u0456\u0440\u0456 \u0446\u0435 \u0442\u0430\u043a."},{"bal":0,"reply":"\u0417\u043e\u0432\u0441\u0456\u043c \u043d\u0435 \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u044e."}]},{"question":"\u042f \u0432\u0432\u0430\u0436\u0430\u044e, \u0449\u043e \u043c\u043e\u0457 \u0441\u043f\u0440\u0430\u0432\u0438 (\u0437\u0430\u043d\u044f\u0442\u0442\u044f, \u0437\u0430\u0445\u043e\u043f\u043b\u0435\u043d\u043d\u044f) \u043c\u043e\u0436\u0443\u0442\u044c \u043f\u0440\u0438\u043d\u0435\u0441\u0442\u0438 \u043c\u0435\u043d\u0456 \u043f\u043e\u0447\u0443\u0442\u0442\u044f \u0437\u0430\u0434\u043e\u0432\u043e\u043b\u0435\u043d\u043d\u044f.","number_question":12,"replies":[{"bal":0,"reply":"\u0422\u043e\u0447\u043d\u043e \u0442\u0430\u043a \u0441\u0430\u043c\u043e, \u044f\u043a \u0456 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439."},{"bal":1,"reply":"\u0422\u0430\u043a, \u0430\u043b\u0435 \u043d\u0435 \u0432 \u0442\u0456\u0439 \u043c\u0456\u0440\u0456, \u044f\u043a \u0440\u0430\u043d\u0456\u0448\u0435."},{"bal":2,"reply":"\u0417\u043d\u0430\u0447\u043d\u043e \u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439."},{"bal":3,"reply":"\u0417\u043e\u0432\u0441\u0456\u043c \u0442\u0430\u043a \u043d\u0435 \u0432\u0432\u0430\u0436\u0430\u044e."}]},{"question":"\u0423 \u043c\u0435\u043d\u0435 \u0431\u0443\u0432\u0430\u0454 \u0440\u0430\u043f\u0442\u043e\u0432\u0435 \u0432\u0456\u0434\u0447\u0443\u0442\u0442\u044f \u043f\u0430\u043d\u0456\u043a\u0438.","number_question":13,"replies":[{"bal":3,"reply":"\u0414\u0443\u0436\u0435 \u0447\u0430\u0441\u0442\u043e."},{"bal":2,"reply":"\u0414\u043e\u0441\u0438\u0442\u044c \u0447\u0430\u0441\u0442\u043e."},{"bal":1,"reply":"\u041d\u0435 \u0442\u0430\u043a \u0443\u0436\u0435 \u0447\u0430\u0441\u0442\u043e."},{"bal":0,"reply":"\u0417\u043e\u0432\u0441\u0456\u043c \u043d\u0435 \u0431\u0443\u0432\u0430\u0454."}]},{"question":"\u042f \u043c\u043e\u0436\u0443 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0437\u0430\u0434\u043e\u0432\u043e\u043b\u0435\u043d\u043d\u044f \u0432\u0456\u0434 \u0433\u0430\u0440\u043d\u043e\u0457 \u043a\u043d\u0438\u0433\u0438, \u0440\u0430\u0434\u0456\u043e \u0447\u0438 \u0442\u0435\u043b\u0435\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438.","number_question":14,"replies":[{"bal":0,"reply":"\u0427\u0430\u0441\u0442\u043e."},{"bal":1,"reply":"\u0406\u043d\u043e\u0434\u0456."},{"bal":2,"reply":"\u0420\u0456\u0434\u043a\u043e."},{"bal":3,"reply":"\u0414\u0443\u0436\u0435 \u0440\u0456\u0434\u043a\u043e."}]}]}'
);

export default testData;
